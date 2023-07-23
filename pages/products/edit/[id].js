import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../../utils/data/productData';
import ProductForm from '../../../forms/ProductForm';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getSingleProduct(id).then((obj) => {
      setEditItem(obj);
    });
  }, [id]);

  return (
    <>
      <Head>
        <title>Edit Record</title>
      </Head>
      <div>
        <ProductForm obj={editItem} />
      </div>

    </>
  );
}
