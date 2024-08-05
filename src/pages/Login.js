import { CContainer, CRow, CCol, CButton, CFormInput, CForm } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../css/style.css'
import image from '../images/img.png'

const Login = () => {
    return (
        <CContainer className="container-center">
            <CRow className='container-middle'>
                <CCol className="header-container">
                    <div>
                        <img src={image} alt="Logo" className='logo' />
                    </div>
                </CCol>
                <CCol xs lg={6} className='row2'>
                    <CForm className="row-form">
                        <div><h3>Login</h3></div>
                        <CFormInput type="text" size="sm" placeholder="Login" aria-label="lg input example" className='input' />
                        <CFormInput type="text" size="sm" placeholder="Senha" aria-label="lg input example" className='input' />
                        <CButton color="secondary" shape="rounded-0" className="button1" href='/Home'>Acessar</CButton>
                        <CButton color="secondary" shape="rounded-0" className="button2" href='/cadastroUsuario'>Cadastrar</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default Login;