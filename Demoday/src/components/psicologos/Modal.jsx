import React from 'react';
import '../Styles/Modal.css';

function Modal({ onClose, psicologo }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <img src={psicologo.foto} alt={psicologo.titulo} className="modal-psicologo-imagem" />
                    </div>
                    <h2>Agendamento de Sessão</h2>
                    <p><strong>Consulta - {psicologo.titulo}</strong></p>
                    <span className="modal-rating">⭐ {psicologo.rating}</span>
                    <div className="modal-body">
                        <form className="modal-form">
                            <label>
                                Nome:
                                <input type="text" placeholder="Digite seu nome" />
                            </label>
                            <label>
                                Idade:
                                <input type="text" placeholder="Digite sua idade" />
                            </label>
                            <label>
                                Data disponível:
                                <input type="date" />
                            </label>
                            <label>
                                Horário disponível:
                                <input type="time" />
                            </label>
                            <label>
                                Motivo da consulta:
                                <input type="text" placeholder="Digite o motivo da consulta" />
                            </label>
                            <label>
                                Preferência de consulta:
                                <select>
                                    <option>Escolha uma opção</option>
                                    <option>Presencial</option>
                                    <option>Online</option>
                                </select>
                            </label>
                            <label>
                                <input type="checkbox" />
                                Indicar se a consulta não for realizada online
                            </label>

                            <button type="submit" className="modal-button">Confirmar</button>
                        </form>
                    </div>

                </div>

                <div className="modal-footer">
                    <h3>Consulta - {psicologo.titulo}</h3>
                    <p>{psicologo.paragrafo}</p>
                </div>

                <button onClick={onClose} className="modal-close-button">Fechar</button>
            </div>
        </div>
    );
}

export default Modal;
