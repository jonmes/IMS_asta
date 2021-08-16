import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layouts/MetaData'
import Sidebar from './Sidebar'

// import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'

const NewProduct = ({ history }) => {
    
    const [id, setId] = useState('');
    const [unitOfItem, setUnitOfItem] = useState('');
    const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    const [categoryOfAsset, setCategoryOfAsset] = useState('');
    const [count, setcount] = useState(0);
    const [conditiontoGoods, setconditiontoGoods] = useState('');
    const [LastDateOfMovment, setLastDateOfMovment] = useState('');

    // const [images, setImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([])

    const categories = [
        'Electronics',
        'Furniture',
        'Stationary'
    ]

    // const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);

    useEffect(() => {

        if (error) {
            // alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/products');
            // alert.success('Product created successfully');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('id', id);
        formData.set('unitOfItem', unitOfItem);
        formData.set('name', name);
        // formData.set('description', description);
        formData.set('categoryOfAsset', categoryOfAsset);
        formData.set('count', count);
        formData.set('conditiontoGoods', conditiontoGoods);
        formData.set('LastDateOfMovment', LastDateOfMovment);

        // images.forEach(image => {
        //     formData.append('images', image)
        // })

        dispatch(newProduct(formData))
    }

    // const onChange = e => {

        // const files = Array.from(e.target.files)

        // setImagesPreview([]);
        // setImages([])

        // files.forEach(file => {
        //     const reader = new FileReader();

        //     reader.onload = () => {
        //         if (reader.readyState === 2) {
        //             setImagesPreview(oldArray => [...oldArray, reader.result])
        //             setImages(oldArray => [...oldArray, reader.result])
        //         }
        //     }

        //     reader.readAsDataURL(file)
        // })
    // }


    return (
        <Fragment>
            <MetaData title={'New Product'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Product</h1>

                                <div className="form-group">
                                    <label htmlFor="id_field">ID</label>
                                    <input
                                        type="text"
                                        id="ID_field"
                                        className="form-control"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="unitOfItem_field">unitOfItem</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={unitOfItem}
                                        onChange={(e) => setUnitOfItem(e.target.value)}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Description  */}

                                {/* <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="categoryOfAsset_field">Category</label>
                                    <select className="form-control" id="categoryOfAsset_field" value={categoryOfAsset} onChange={(e) => setCategoryOfAsset(e.target.value)}>
                                        {categories.map(categoryOfAsset => (
                                            <option key={categoryOfAsset} value={categoryOfAsset} >{categoryOfAsset}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="count_field">count</label>
                                    <input
                                        type="number"
                                        id="count_field"
                                        className="form-control"
                                        value={count}
                                        onChange={(e) => setcount(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="conditiontoGoods_field">conditiontoGoods of the good</label>
                                    <input
                                        type="text"
                                        id="conditiontoGoods_field"
                                        className="form-control"
                                        value={conditiontoGoods}
                                        onChange={(e) => setconditiontoGoods(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="LastDateOfMovment_field">Last Date Of Movement</label>
                                    <input
                                        type="text"
                                        id="LastDateOfMovment_field"
                                        className="form-control"
                                        value={LastDateOfMovment}
                                        onChange={(e) => setLastDateOfMovment(e.target.value)}
                                    />
                                </div>

                                {/*  Images  */}

                                {/* <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div> */}


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewProduct
