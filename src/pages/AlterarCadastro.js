import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CContainer, CRow, CCol, CButton, CFormInput, CForm } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/style.css';
import { useParams, useNavigate } from 'react-router-dom';
import image from '../images/img.png';

const AlterarUsuario = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const usuarioId = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/contatos/${id}`);
                const { nome, email, telefone } = response.data;
                setNome(nome);
                setEmail(email);
                setTelefone(telefone);
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        };

        usuarioId();
    }, [id]);

    async function alterarCadastroContato() {
        try {
            const response = await axios.put(`http://localhost:3000/contatos/${id}`, {
                nome,
                email,
                telefone,
            });
            console.log('Usuário atualizado com sucesso:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }
    }

    async function apagarCadastroContato() {
        try {
            const response = await axios.delete(`http://localhost:3000/contatos/${id}`);
            console.log('Usuário deletado com sucesso:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
        }
    }

    return (
        <CContainer className="container-center">
            <CRow className='container-middle'>
                <CCol className="header-container">
                    <div className='div-logo'>
                        <img src={image} alt="Logo" className='logo' />
                    </div>
                </CCol>
                <CCol xs lg={6} className='row2'>
                    <CForm className='row-form'>
                        <div><h3>Cadastro de Contato</h3></div>
                        <CFormInput type="text" size="sm" placeholder="Nome" className='input' onChange={(e) => setNome(e.target.value)} value={nome} />

                        <CFormInput type="text" size="sm" placeholder="Email" className='input' onChange={(e) => setEmail(e.target.value)} value={email} />

                        <CFormInput type="text" size="sm" placeholder="Telefone" className='input' onChange={(e) => setTelefone(e.target.value)} value={telefone} />

                        <CButton color="secondary" shape="rounded-0" className="button1" onClick={alterarCadastroContato}>Salvar</CButton>

                        <CButton color="secondary" shape="rounded-0" className="button2" onClick={apagarCadastroContato}>Excluir</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default AlterarUsuario;
