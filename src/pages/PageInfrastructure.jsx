import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Quote from "../templates/Quote"

export default function PageInfrastructure() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Infraestrutura | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="INFRAESTRUTURA" caption="Serviços" href="service" />
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto container" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase" style={{textAlign: 'justify'}}> A automação de tarefas é o processo de usar tecnologias, como software ou robôs, para realizar atividades rotineiras ou repetitivas de forma automática.</h5>
            </div>
            <div>
                <h5 className="position-relative pb-3 mb-5 mx-auto container" style={{textAlign: 'justify', maxWidth: '900px'}}>
                    Para pequenas e médias empresas, ter uma infraestrutura atualizada é fundamental para manter a eficiência, segurança e competitividade. A infraestrutura atualizada oferece maior flexibilidade e escalabilidade, permitindo que a empresa cresça e se adapte às mudanças do mercado. Além disso, tecnologias atualizadas ajudam a garantir que a empresa esteja protegida contra ameaças de segurança cada vez mais sofisticadas, reduzindo o risco de violação de dados e outras vulnerabilidades.
                </h5>
            </div>
            <Quote />
            <Footer />
        </>
    )
}