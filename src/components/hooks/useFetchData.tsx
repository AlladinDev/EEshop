import {  Firestore,collection, DocumentData, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface FetchDataProps {
  db: Firestore;
  path: string;
  secondaryPath?: string;
}

interface Data {
  loading: boolean;
  apiError: boolean;
  products:DocumentData[]; // Adjust the type based on your product structure
}

export const UseFetchData= ({ db, path }:FetchDataProps):[boolean,boolean,DocumentData[]] => {
  const [data, setData] = useState<Data>({ loading: true, apiError: false, products:[] });
  useEffect(() => {
    const getData = async () => {
      try {
        const docRef =  collection(db,path)
        const docSnap = await getDocs(docRef);
        const fetchedData = docSnap.docs
        const data=fetchedData.map((item)=>item.data())
        console.log(data)
        setData({ loading: false, apiError: false, products:data|| [] });
      } catch (err) {
        console.log(err)
        setData({ loading: false, apiError: true, products: [] });
      }
    };
    getData();
  }, [db, path]);

  return [data.loading, data.apiError, data.products];
};


