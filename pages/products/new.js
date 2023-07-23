import { useRouter } from 'next/router';
import ProductForm from '../../forms/ProductForm';

export default function NewProduct() {
  const router = useRouter();
  const { sellerId } = router.query;
  return (
    <div>
      <h2>Create Record</h2>
      <ProductForm sellerId={sellerId} />
    </div>
  );
}
