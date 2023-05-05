import React from 'react'
import './style.scss'
import PageContainer from '../../components/pageContainer/PageContianer'
const NotFound = () => {
  return (
    <div className="pageNotFound">
    <PageContainer>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
    </PageContainer>
</div>
)}

export default NotFound