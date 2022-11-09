
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'
import notebook from '../images/notebook.png'
import '../components/Header.css'



export const Header = () => {
    return (
        <div className='MainDiv'>            
            <motion.div className="headerMain">
                <motion.div className="TitleDiv">
                    <motion.h3
                        className='textTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        Olá, bem-vindo a
                    </motion.h3>

                    <motion.h1
                        className='bigTextTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        AlphaTech
                    </motion.h1>
                    
                    <motion.h6
                        className='smallTextTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        Informática
                    </motion.h6>

                    <motion.h6
                        className='descriptionTextTitle'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.70, 0.2, 1.01]
                        }}
                    >
                        Somos uma empresa de informática presente no mercado a mais de 3 anos provendo qualidade e eficiência nos nossos serviços, nosso lema é: "Não basta estar funcionando, tem que evitar que quebre denovo", nosso maior prazer está em servir um serviço com qualidade e eficiência.
                    </motion.h6>

                    <motion.div className="clickDiv">
                        <motion.button
                        className='buttonClick'                                                
                        initial = {{opacity: 0, scale: 0.5}}
                        animate = {{opacity: 1, scale: 1.0}}
                        transition = {{duration: 0.5, delay:0.2, ease : "easeOut"}}                        
                        whileHover = {{scale:1.1}}
                        >
                            <div className='divRowButton'><a>Fazer encomenda</a>  <box-icon name='chevron-right' color='#f1efef' ></box-icon></div>
                        </motion.button>

                        <motion.button
                        className='buttonClick'                                                
                        initial = {{opacity: 0, scale: 0.5}}
                        animate = {{opacity: 1, scale: 1.0}}
                        transition = {{duration: 0.5, delay:0.2, ease : "easeOut"}}                        
                        whileHover = {{scale:1.1}}
                        >
                            <div className='divRowButton'><a>Ver ofertas</a>  <box-icon name='chevron-right' color='#f1efef' ></box-icon></div>
                        </motion.button>
                        
                    </motion.div>
                </motion.div>

                <motion.div      
                    className="ImageDiv"
                
                    initial={{
                        opacity: 1
                    }}
                    animate={{                         
                        y: [0,15,0]                      
                    }}
                    transition={{
                        duration: 1.0,
                        delay: 0.5,
                        repeat: Infinity                                                
                    }}>

                    <img
                        className='imageTitle'
                        src={notebook}
                        alt="Sem imagem"
                    />

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Header;