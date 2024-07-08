import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // UUID를 사용하여 고유한 파일 이름 생성

// 이미지 업로드 함수
const uploadImage = async (file) => { 
    const storage = getStorage();
    const uniqueFileName = `${uuidv4()}.${file.name.split('.').pop()}`; // 고유한 파일 이름 생성
    const storageRef = ref(storage, uniqueFileName);

    try {
        // 이미지 업로드
        await uploadBytes(storageRef, file);
        console.log('Uploaded a blob or file!');

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
