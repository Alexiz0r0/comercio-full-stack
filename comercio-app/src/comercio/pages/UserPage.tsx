import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ComercioLayout from '../layout/ComercioLayout';

interface Product {
  id: string;
  name: string;
  role: string;
}

const UserPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'tito', role: 'user' },
    { id: '2', name: 'aron', role: 'admin' },
  ]);

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <>
        <Button icon='pi pi-pencil' rounded outlined className='mr-2' />
        <Button icon='pi pi-trash' rounded outlined severity='danger' />
      </>
    );
  };
  return (
    <ComercioLayout>
      <div className='flex justify-content-between align-content-center mb-4'>
        <div className='font-medium text-4xl'>User</div>
        <div className='flex align-items-center'>
          <Button label='User' icon='pi pi-plus' size='small' severity='success' outlined />
        </div>
      </div>
      <div className=''>
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
          <Column field='id' header='Id' sortable style={{ minWidth: '12rem' }}></Column>
          <Column field='name' header='Name' sortable style={{ minWidth: '16rem' }}></Column>
          <Column field='role' header='Role' sortable style={{ minWidth: '16rem' }}></Column>
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: '12rem' }}
          ></Column>
        </DataTable>
      </div>
    </ComercioLayout>
  );
};

export default UserPage;
