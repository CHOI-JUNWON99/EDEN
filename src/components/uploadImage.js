import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// 이미지를 WebP로 변환하는 함수
const convertToWebP = (file, maxWidth = 1920, quality = 0.8) => {
    return new Promise((resolve, reject) => {
        // 이미 WebP인 경우 그대로 반환
        if (file.type === 'image/webp') {
            resolve(file);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // 캔버스 생성
                const canvas = document.createElement('canvas');

                // 이미지 크기 계산 (최대 너비 제한)
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                // 캔버스에 이미지 그리기
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // WebP로 변환
                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            // Blob을 File 객체로 변환
                            const webpFile = new File([blob], 'image.webp', {
                                type: 'image/webp',
                            });
                            resolve(webpFile);
                        } else {
                            reject(new Error('WebP 변환 실패'));
                        }
                    },
                    'image/webp',
                    quality
                );
            };
            img.onerror = () => reject(new Error('이미지 로드 실패'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('파일 읽기 실패'));
        reader.readAsDataURL(file);
    });
};

// 이미지 업로드 함수 (WebP 변환 포함)
const uploadImage = async (file) => {
    const storage = getStorage();

    try {
        // WebP로 변환
        const webpFile = await convertToWebP(file);

        // 고유한 파일 이름 생성 (항상 .webp 확장자)
        const uniqueFileName = `${uuidv4()}.webp`;
        const storageRef = ref(storage, uniqueFileName);

        // 이미지 업로드
        await uploadBytes(storageRef, webpFile);
        console.log('Uploaded as WebP!');

        // 다운로드 URL 가져오기
        const url = await getDownloadURL(storageRef);
        console.log('File available at', url);

        return url;
    } catch (error) {
        console.error('Error uploading image: ', error);
        throw error;
    }
};

// Firestore에 뉴스 문서 추가 함수
const addNewsWithImage = async (title, author, content, preview, file) => {
    try {
        const imageUrl = await uploadImage(file);
        await addDoc(collection(db, 'news'), {
            title,
            author,
            content,
            created_at: Timestamp.fromDate(new Date()),
            likes: 0,
            main_image: imageUrl,
            additional_images: [],
            preview,
            updated_at: Timestamp.fromDate(new Date()),
            views: 0,
        });
        alert('뉴스가 성공적으로 추가되었습니다.');
    } catch (error) {
        console.error('Error adding news: ', error);
    }
};

export { uploadImage, addNewsWithImage };
