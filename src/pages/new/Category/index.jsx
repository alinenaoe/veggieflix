/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';
import FormField from '../../../components/FormField';
import * as S from './styles';
import Button from '../../../components/Button';

export default function NewCategory() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#802d56',
  };

  const [newCategory, setNewCategory] = useState(defaultValues);
  const [categories, setCategories] = useState([]);

  function setCategoryValue(key, value) { // setValue
    setNewCategory({
      ...newCategory,
      [key]: value,
    });
  }

  function handleChange(e) {
    setCategoryValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory(defaultValues);
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://veggieflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setCategories(data);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <TemplateDefault>
      <h1>Cadastrar nova categoria:</h1>

      <S.Form onSubmit={handleSubmit}>

        <FormField
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

        <Button type="submit">Cadastrar</Button>
        ,

      </S.Form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <Link to="/new/video">
        New video
      </Link>
    </TemplateDefault>
  );
}
