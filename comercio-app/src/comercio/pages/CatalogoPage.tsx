import { useEffect, useState } from 'react';
import ComercioLayout from '../layout/ComercioLayout';
import { Button } from 'primereact/button';
import { comercioApi } from '../../api';
import AddItem from '../components/modal/AddItem';
import { Dialog } from 'primereact/dialog';

import noimage from '../../assets/noimage.png';

interface Product {
  idArticulo: string;
  nroArticulo: number;
  nombreArticulo: string;
  descripcionArticulo: string;
  image: string;
  idFabrica: string;
  nombreFabrica: string;
}

const CatalogoPage = () => {
  const [product, setProduct] = useState<Product[]>([
    {
      idArticulo: 'fe4c308b-4fbe-462d-af3d-2f2f77f9247f',
      nroArticulo: 5,
      nombreArticulo: 'latop 005',
      descripcionArticulo: 'descripcion 005',
      image: 'model-o-wireless-mw-2.jpg',
      idFabrica: '7b816d9a-7cbc-4f2e-bc4a-67e994c0091a',
      nombreFabrica: 'dell',
    },
  ]);

  const [showAddMode, setShowAddMode] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const resp = await comercioApi.get('/articulos');
      const { data } = resp;
      if (data) {
        setProduct(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ComercioLayout>
        <div className='flex justify-content-between align-content-center mb-4'>
          <div className='font-medium text-4xl'>Popular Products</div>
          <div className='flex align-items-center'>
            <Button
              label='Product'
              icon='pi pi-plus'
              size='small'
              severity='success'
              outlined
              onClick={() => setShowAddMode(true)}
            />
          </div>
        </div>
        <div className='grid -mt-3 -ml-3 -mr-3'>
          {product.map((item) => (
            <div className='col-12 md:col-6 lg:col-4' key={item.idArticulo}>
              <div className='p-2'>
                <div className='shadow-2 p-4 surface-card border-round'>
                  <div className='relative mb-3'>
                    <span
                      className='surface-card text-900 shadow-2 px-3 py-2 absolute'
                      style={{ borderRadius: '1.5rem', left: '1rem', top: '1rem' }}
                    >
                      {item.nroArticulo}
                    </span>
                    <img
                      src={
                        item.image === null ? noimage : `data:image/png;base64,${item.image}`
                      }
                      className='w-full'
                      alt='0'
                    />
                  </div>
                  <div className='flex justify-content-between align-items-center mb-3'>
                    <span className='text-900 font-medium text-xl'>{item.nombreArticulo}</span>
                    <span>
                      <i className='pi pi-star-fill text-yellow-500 mr-1'></i>
                      <span className='font-medium'>5.0</span>
                    </span>
                  </div>
                  <p className='mt-0 mb-3 text-700 line-height-3'>
                    {item.descripcionArticulo}
                  </p>
                  <span className='text-primary text-xl font-medium'>
                    {item.nombreFabrica}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ComercioLayout>
      <Dialog
        header='Add New Product'
        visible={showAddMode}
        style={{ width: '50vw' }}
        onHide={() => setShowAddMode(false)}
      >
        <AddItem
          setItemAdd={() => {
            setShowAddMode(false);
            getAllProducts();
          }}
        />
      </Dialog>
    </>
  );
};

export default CatalogoPage;
