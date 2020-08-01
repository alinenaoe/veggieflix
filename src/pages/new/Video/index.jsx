import React from 'react';
import TemplateDefault from '../../../components/TemplateDefault'
import { Link } from 'react-router-dom';

export default function newVideo() {
    return (
        <TemplateDefault>
            <h1>New video</h1>
            <Link to="/new/category">
                New category
            </Link>
        </TemplateDefault>
    )
}