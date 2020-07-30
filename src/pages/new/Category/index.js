import React, {useState} from 'react';
import TemplateDefault from '../../../components/TemplateDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'
import * as S from './styles'

export default function NewCategory() {

    const defaultValues = {
        name: '',
        description: '',
        color: '#802d56'
    }

    const [newCategory, setNewCategory] = useState(defaultValues);
    const [categories, setCategories] = useState([]);
    
    function handleChange(e) {
        setCategoryValue(
            e.target.getAttribute('name'),
            e.target.value
        )        
    }
    
    function setCategoryValue (key, value) { //setValue
        setNewCategory({
            ...newCategory, 
            [key]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        setCategories([...categories, newCategory])
        setNewCategory(defaultValues)
    }

    return (
        <TemplateDefault>
            <h1>Cadastrar nova categoria:</h1>

            <S.Form onSubmit={handleSubmit}>

                <S.FormField 
                    label="Nome da categoria"
                    type="text"
                    name="name"
                    value={newCategory.name}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={newCategory.description}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="color"
                    value={newCategory.color}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>,

            </S.Form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>{category.name}</li>
                    )
                })
                }
            </ul>

            <Link to="/new/video">
                New video
            </Link>
        </TemplateDefault>
    )
} 