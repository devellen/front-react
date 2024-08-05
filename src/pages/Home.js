import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CContainer, CRow, CCol, CListGroup, CListGroupItem, CButton, CAvatar } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/style.css';
import { CIcon } from '@coreui/icons-react';
import { cilPlus, cilGroup, cilPencil } from '@coreui/icons';
import image from '../images/img.png';
import imgAvatar from "../images/avatar.jpeg"

const Home = () => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    function consultarDados() {

      axios.get('http://localhost:3000/contatos')

        .then(function (response) {
          setContatos(response.data);
        }).catch(function (error) {
          console.log(error);

        });

    }
    consultarDados();
  }, [])

  return (
    <CContainer className="container-center">
      <CRow className="container-middle">
        <CCol className="header-container">
          <div className="div-logo">
            <img src={image} alt="Logo" className="logo" />
          </div>
        </CCol>
        <CCol xs lg={6} className='row2'>
          <CListGroup className="list">
            <CListGroupItem as="button" className="head-list">
              <CIcon icon={cilGroup} size="sm" />
              <h5>User</h5>
              <CButton color="secondary" variant="ghost" href="/cadastroContato" className="b-list">
                <CIcon icon={cilPlus} size="sm" />
              </CButton>
            </CListGroupItem>
            {contatos.map((contato) => (
              <CListGroupItem key={contato.id} as="button">
                <div className='div-usuario'>
                  <CAvatar src={imgAvatar} />
                  <p className='nome'>{contato.nome}</p>
                </div>

                <div className='div-usuario2'>
                  <p className='numero'>{contato.telefone}</p>
                  <CButton href={"/alterarContato/" + contato.id} className='numero'><CIcon icon={cilPencil} size="sm" /></CButton>
                </div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Home;