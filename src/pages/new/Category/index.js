import React from 'react';
import TemplateDefault from '../../../components/TemplateDefault'
import { Link } from 'react-router-dom';

export default function NewCategory() {
    return (
        <TemplateDefault>
            <h1>New category</h1>

            <form>
                <label>
                Nome da Categoria:
                <input type="text" />
                </label>

                <button>Cadastrar</button>
            </form>

            <Link to="/new/video">
                New video
            </Link>
        </TemplateDefault>
    )
}