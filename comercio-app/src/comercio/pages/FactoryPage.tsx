import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ComercioLayout from '../layout/ComercioLayout';
import { comercioApi } from '../../api';
import { Dialog } from 'primereact/dialog';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import AddFactory from '../components/modal/AddFactory';

interface Product {
  idFabrica: string;
  nombreFabrica: string;
}

const FactoryPage = () => {
  const [factory, setfactory] = useState<Product[]>([
    { idFabrica: '1', nombreFabrica: 'tito' },
    { idFabrica: '2', nombreFabrica: 'aron' },
  ]);

  const [showAddMode, setShowAddMode] = useState(false);

  useEffect(() => {
    getAllFactories();
  }, []);

  const getAllFactories = async () => {
    try {
      const resp = await comercioApi.get('/fabricas');
      const { data } = resp;
      if (data) {
        setfactory(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <>
        <Button icon='pi pi-pencil' rounded outlined className='mr-2' />
        <Button icon='pi pi-trash' rounded outlined severity='danger' />
      </>
    );
  };
  return (
    <>
      <ComercioLayout>
        <div className='flex justify-content-between align-content-center mb-4'>
          <div className='font-medium text-4xl'>Factory</div>
          <div className='flex align-items-center'>
            <Button
              label='Factory'
              icon='pi pi-plus'
              size='small'
              severity='success'
              outlined
              onClick={() => setShowAddMode(true)}
            />
          </div>
        </div>
        <div className=''>
          <DataTable value={factory} tableStyle={{ minWidth: '50rem' }}>
            <Column
              field='idFabrica'
              header='Id'
              sortable
              style={{ minWidth: '12rem' }}
            ></Column>
            <Column
              field='nombreFabrica'
              header='Name'
              sortable
              style={{ minWidth: '16rem' }}
            ></Column>

            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: '12rem' }}
            ></Column>
          </DataTable>
        </div>
      </ComercioLayout>
      <Dialog
        header='Add New autor'
        visible={showAddMode}
        style={{ width: '30vw' }}
        onHide={() => setShowAddMode(false)}
      >
        <AddFactory
          setFactoryAdd={() => {
            setShowAddMode(false);
            getAllFactories();
          }}
        />
      </Dialog>
    </>
  );
};

export default FactoryPage;
