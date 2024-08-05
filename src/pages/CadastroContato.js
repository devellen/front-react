import React, { useState } from 'react';
import axios from 'axios';
import { CContainer, CRow, CCol, CButton, CForm, CFormInput } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/style.css'
import { useNavigate } from 'react-router-dom';
import image from '../images/img.png'

const CadastroContato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate();

    const inserirCadastroContato = async () => {
        try {
            const response = await axios.post('http://localhost:3000/contatos', {
                nome: nome,
                email: email,
                telefone: telefone,
            });
            console.log('Contato cadastrado com sucesso:', response.data);
            setNome('');
            setEmail('');
            setTelefone('');
            navigate('/home');
        } catch (error) {
            console.error('Erro ao cadastrar contato:', error);
        }
    };

    return (
        <CContainer className="container-center">
            <CRow className="container-middle">
                <CCol className="header-container">
                    <div className="div-logo">
                        <img src={image} alt="Logo" className="logo" />
                    </div>
                </CCol>
                <CCol xs lg={6} className="row2">
                    <CForm className="row-form">
                        <div><h3>Cadastro de Contato</h3></div>
                        <CFormInput type="text" size="sm" placeholder="Nome" className="input" onChange={(e) => setNome(e.target.value)} value={nome} />

                        <CFormInput type="email" size="sm" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <CFormInput type="text" size="sm" placeholder="Telefone" className="input" onChange={(e) => setTelefone(e.target.value)} value={telefone} />

                        <CButton color="secondary" shape="rounded-0" className="button1" onClick={inserirCadastroContato}>Salvar</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default CadastroContato;