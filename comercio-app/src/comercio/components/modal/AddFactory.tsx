import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import { comercioApi } from '../../../api';

const factoryRequest = {
  nombreFabrica: '',
};

const AddFactory = (props) => {
  const [factoryInfo, setFactoryInfo] = useState(factoryRequest);

  const addNewfactory = async () => {
    try {
      const resp = await comercioApi.post('/fabricas', factoryInfo);
      if (resp) {
        props.setFactoryAdd();
      }
    } catch (e) {}
  };
  return (
    <>
      <div className='my-4'>
        <span className='p-float-label'>
          <InputText
            id='nombre'
            value={factoryInfo.nombreFabrica}
            onChange={(e) => setFactoryInfo({ ...factoryInfo, nombreFabrica: e.target.value })}
            className='w-12'
          />
          <label htmlFor='name'>name</label>
        </span>
      </div>
      <Button label='Add New Factory' severity='info' onClick={() => addNewfactory()} />
    </>
  );
};

export default AddFactory;
