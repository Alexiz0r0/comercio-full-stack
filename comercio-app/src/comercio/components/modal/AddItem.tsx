import { useEffect, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import { comercioApi } from '../../../api';
import { Dropdown } from 'primereact/dropdown';

import { Toast } from 'primereact/toast';
import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
  FileUploadSelectEvent,
  ItemTemplateOptions,
} from 'primereact/fileupload';

import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

const articuloInfo = {
  nombreArticulo: '',
  descripcionArticulo: '',
};

const fabricaInfo = {
  idFabrica: '',
  nombreFabrica: '',
};

interface Factory {
  idFabrica: string;
  nombreFabrica: string;
}

interface ArticuloRequet {
  nombreArticulo: string;
  descripcionArticulo: string;
  idFabrica: string;
  image: string | null | undefined;
}

const AddItem = (props) => {
  const [itemInfo, setItemInfo] = useState(articuloInfo);
  const [factoryInfo, setFactoryInfo] = useState<Factory>(fabricaInfo);

  const [base64, setBase64] = useState<string | null>(null);

  const [factory, setFactory] = useState<Factory[]>([
    {
      idFabrica: 'abc',
      nombreFabrica: 'zxy',
    },
  ]);

  useEffect(() => {
    getAllFactories();
  }, []);

  const getAllFactories = async () => {
    try {
      const resp = await comercioApi.get('/fabricas');
      const { data } = resp;
      if (data) {
        setFactory(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const toast = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<FileUpload>(null);

  const onTemplateSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    let files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }

    setTotalSize(_totalSize);
  };

  const onTemplateClear = () => {
    setTotalSize(0);
    setBase64(null);
    console.log('clear');
  };

  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { className, chooseButton, cancelButton } = options;

    return (
      <div
        className={className}
        style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Lee el archivo como una URL en base64
      reader.onload = () => resolve(reader.result as string); // Retorna el resultado en base64
      reader.onerror = (error) => reject(error); // Maneja errores
    });
  };

  const handleFileChange = async (file: File) => {
    if (file) {
      try {
        const base64String = await convertToBase64(file);
        setBase64(base64String);
      } catch (error) {
        console.error('Error al convertir la imagen a Base64:', error);
      }
    }
  };

  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File;
    handleFileChange(file);
    return (
      <div className='flex align-items-center flex-wrap'>
        <div className='flex align-items-center w-9'>
          <img alt={file.name} role='presentation' src={file.objectURL} width={100} />
          <span className='flex flex-column text-left ml-3'>
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <div className='flex align-items-center w-3'>
          <Tag value={props.formatSize} severity='warning' className='px-3 py-2' />
        </div>
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className='flex align-items-center flex-column'>
        <i
          className='pi pi-image mt-3 p-5'
          style={{
            fontSize: '5em',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-b)',
            color: 'var(--surface-d)',
          }}
        ></i>
        <span
          style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}
          className='my-5'
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };

  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };

  const addNewItem = async () => {
    console.log(itemInfo);
    console.log(factoryInfo);
    console.log(base64);

    const base64WithoutPrefix = base64?.replace(/^data:image\/[a-zA-Z]+;base64,/, '');

    const body: ArticuloRequet = {
      nombreArticulo: itemInfo.nombreArticulo,
      descripcionArticulo: itemInfo.descripcionArticulo,
      idFabrica: factoryInfo.idFabrica,
      image: base64WithoutPrefix,
    };

    try {
      const response = await comercioApi.post('/articulos', body);
      if (response) {
        props.setItemAdd();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='my-4'>
        <span className='p-float-label'>
          <InputText
            id='nombreArticulo'
            value={itemInfo.nombreArticulo}
            className='w-12'
            onChange={(e) => setItemInfo({ ...itemInfo, nombreArticulo: e.target.value })}
          />
          <label htmlFor='nombreArticulo'>nombre articulo</label>
        </span>
      </div>
      <div className='my-4'>
        <span className='p-float-label'>
          <InputText
            id='descripcionArticulo'
            value={itemInfo.descripcionArticulo}
            className='w-12'
            onChange={(e) => setItemInfo({ ...itemInfo, descripcionArticulo: e.target.value })}
          />
          <label htmlFor='descripcionArticulo'>descripcion articulo</label>
        </span>
      </div>
      <div className='my-4'>
        <span className='p-float-label'>
          <Dropdown
            inputId='dd-autor'
            options={factory}
            value={factoryInfo}
            onChange={(e) => setFactoryInfo(e.value)}
            optionLabel='nombreFabrica'
            className='w-full'
          />
          <label htmlFor='dd-autor'>Select a Factory</label>
        </span>
      </div>
      <div className='my-4'>
        <Toast ref={toast}></Toast>

        <Tooltip target='.custom-choose-btn' content='Choose' position='bottom' />

        <Tooltip target='.custom-cancel-btn' content='Clear' position='bottom' />

        <FileUpload
          ref={fileUploadRef}
          accept='image/*'
          maxFileSize={1000000}
          onSelect={onTemplateSelect}
          onError={onTemplateClear}
          onClear={onTemplateClear}
          headerTemplate={headerTemplate}
          itemTemplate={itemTemplate}
          emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          cancelOptions={cancelOptions}
        />
      </div>
      <Button label='Add New autor' severity='info' onClick={() => addNewItem()} />
    </>
  );
};

export default AddItem;
