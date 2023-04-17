import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Quote from "../templates/Quote"

export default function PageAutoTask() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Automação | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="AUTOMAÇÃO" caption="Serviços" href="service" />
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto container" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase" style={{textAlign: 'justify'}}> A automação de tarefas é o processo de usar tecnologias, como software ou robôs, para realizar atividades rotineiras ou repetitivas de forma automática.</h5>
            </div>
            <div>
                <h5 className="position-relative pb-3 mb-5 mx-auto container" style={{maxWidth: '900px', textAlign: 'justify'}}>Isso pode incluir tarefas como envio de e-mails,
                    atualização de registros de banco de dados, ou processamento de pedidos.
                    A automação de tarefas pode aumentar a eficiência e reduzir erros humanos,
                    além de liberar tempo para que os funcionários possam se concentrar em tarefas mais estratégicas.
                </h5>
            </div>
            <Quote />
            <Footer />
        </>
    )
}