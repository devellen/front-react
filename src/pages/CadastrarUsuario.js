import React, { useState } from 'react';
import axios from 'axios';
import { CContainer, CRow, CCol, CButton, CForm, CFormInput } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/style.css'
import { useNavigate } from 'react-router-dom';
import image from '../images/img.png'

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const inserirCadastroUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:3000/users', {
                nome: nome,
                email: email,
                senha: senha,
            });
            console.log('Usuário cadastrado com sucesso:', response.data);
            setNome('');
            setEmail('');
            setSenha('');
            navigate('/');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
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
                        <div><h3>Cadastro de Usuário</h3></div>
                        <CFormInput type="text" size="sm" placeholder="Nome" className="input" onChange={(e) => setNome(e.target.value)} value={nome} />

                        <CFormInput type="email" size="sm" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <CFormInput type="password" size="sm" placeholder="Senha" className="input" onChange={(e) => setSenha(e.target.value)} value={senha} />

                        <CButton color="secondary" shape="rounded-0" className="button1" onClick={inserirCadastroUsuario}>Cadastrar</CButton>
                        <CButton color="secondary" shape="rounded-0" className="button2" href="/">Voltar</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default CadastroUsuario;