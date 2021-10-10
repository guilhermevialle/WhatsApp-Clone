import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import { Expo, gsap, Power2, Circ } from "gsap";

// svgs
import status from "./svgs/status.svg";
import newmessage from "./svgs/newmessage.svg";
import settings from "./svgs/settings.svg";
import bell from "./svgs/bell.svg";
import search from "./svgs/search.svg";
import prev from "./svgs/prev.svg";
import change from "./svgs/change.svg";
import photo from "./svgs/photo.svg";
import emoji from "./svgs/emoji.svg";
import clip from "./svgs/clip.svg";
import mic from "./svgs/mic.svg";
import next from "./svgs/next.svg";
import block from "./svgs/block.svg";
import dislike from "./svgs/dislike.svg";
import erase from "./svgs/delete.svg";

// imgs
import introImg from "./imgs/introwpp-modified.png";

// import from database
import currentContatos from "./database/contatos";
import currentUser from "./database/user";
import aboutContato, { allMessages } from "./database/aboutContato";

// contexts

// funtions
function App() {
    const [user, setUser] = useState(currentUser);
    const [contatos, setContatos] = useState(currentContatos);
    const [contatoInterface, setContatoInterface] = useState(aboutContato);

    function makeMessageAtRealTime(str) {
        return;
        <div className="ty">
            <div className="fd">
                <div className="checked">
                    <span>{str}</span>
                </div>
            </div>
        </div>;
    }

    function makeMessage(arr) {
        return arr.map((a, index) => {
            var cn = "";
            var checked = "";

            if (a[0] == "you") {
                cn = "ty";
            } else {
                cn = "th";
            }

            if (arr[index - 1] == undefined || a[0] != arr[index - 1][0]) {
                checked += "checked";
            }

            return (
                <div className={cn}>
                    <div className="fd">
                        <div className={checked}>
                            <span>{a[1]}</span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    function createContatos(contato) {
        return (
            <div
                className="userMessage"
                onClick={(e) => {
                    console.log(contatoInterface);
                    gsap.to(".intro", {
                        display: "none",
                        duration: 0,
                    });
                    gsap.to(".contatoInterface", {
                        zIndex: 10,
                    });
                    gsap.from(".conatoInterface", {
                        xPercent: -100,
                        ease: Expo.easeInOut,
                        duration: 0.2,
                    });

                    setContatoInterface(contato);
                }}
            >
                <div className="userImg">
                    <img src={contato.image} />
                </div>
                <div className="userInfo">
                    <p>{contato.name}</p>
                    <p>
                        {contato.allMessages[contato.allMessages.length - 1][1]}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="interface">
                <div className="leftSide">
                    <div className="userSlider">
                        <div className="grayBox">
                            <div>
                                <div className="previous">
                                    <img
                                        src={prev}
                                        onClick={() => {
                                            gsap.to(".userSlider", {
                                                xPercent: -100,
                                                ease: Expo.easeIn,
                                            });
                                        }}
                                    />
                                </div>
                                <h1>Perfil</h1>
                            </div>
                        </div>
                        <div className="restBox">
                            <div className="userImg">
                                <img src={user.image} id="userImgSettings" />
                                <div
                                    className="aboveUserImg"
                                    onMouseLeave={() => {
                                        gsap.to(".aboveUserImg", {
                                            ease: Power2.easeIn,
                                            duration: 0.1,
                                            opacity: 0,
                                            // display: "none",
                                        });
                                    }}
                                    onMouseEnter={() => {
                                        gsap.to(".aboveUserImg", {
                                            // display: "flex",
                                            ease: Power2.easeIn,
                                            duration: 0.2,
                                            opacity: 1,
                                        });
                                    }}
                                >
                                    <input
                                        accept="image/*"
                                        type="file"
                                        name="file"
                                        id="file"
                                        value=""
                                        onChange={(e) => {
                                            var file = e.target.files[0];
                                            file = URL.createObjectURL(file);

                                            setUser((prevUser) => {
                                                prevUser.image = file;
                                                return prevUser;
                                            });

                                            return console.log(user);
                                        }}
                                    />
                                    <img src={photo} />
                                    <div>MUDAR FOTO DE PERFIL</div>
                                </div>
                            </div>

                            <div className="userName fade-down">
                                <div className="span">
                                    <span>Nome</span>
                                </div>
                                <div className="change">
                                    <div id="userNameChange"> {user.name}</div>
                                    <img
                                        src={change}
                                        onClick={() => {
                                            var e =
                                                document.querySelector(
                                                    "#userNameChange"
                                                );
                                            e.innerHTML = `<input
                                                               
                                                               
                                                                type="text"
                                                                autoComplete="off"
                                                                value="${user.name}"
                                                            />`;

                                            e.addEventListener(
                                                "change",
                                                (event) => {
                                                    var val =
                                                        event.target.value;
                                                    setUser((prevState) => {
                                                        prevState.name = val;
                                                        return prevState;
                                                    });
                                                    e.textContent = user.name;
                                                }
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="warnBox fade-down">
                                Esse não é seu nome de usuário e nem seu PIN.
                                Esse nome será visível para seus contatos do
                                WhatsApp.
                            </div>

                            <div className="bioBox fade-down">
                                <div className="span">
                                    <span>Recado</span>
                                </div>
                                <div className="change">
                                    <div id="userBioChange"> {user.bio}</div>
                                    <img
                                        src={change}
                                        onClick={() => {
                                            var e =
                                                document.querySelector(
                                                    "#userBioChange"
                                                );
                                            e.innerHTML = `<input
                                                               
                                                               
                                                                type="text"
                                                                autoComplete="off"
                                                                value="${user.bio}"
                                                            />`;

                                            e.addEventListener(
                                                "change",
                                                (event) => {
                                                    var val =
                                                        event.target.value;
                                                    setUser((prevState) => {
                                                        prevState.bio = val;
                                                        return prevState;
                                                    });
                                                    e.textContent = user.bio;
                                                }
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="profile">
                            <img
                                onClick={() => {
                                    gsap.to(".userSlider", {
                                        xPercent: 100,
                                        ease: Power2.easeOut,
                                        duration: 0.2,
                                    });

                                    gsap.from("#userImgSettings", {
                                        scaleX: 0,
                                        scaleY: 0,
                                        ease: Circ.easeOut,
                                        duration: 0.2,
                                        delay: 0.2,
                                    });

                                    gsap.from(".fade-down", {
                                        y: -15,
                                        ease: Power2.ease,
                                        opacity: 0,
                                        duration: 0.18,
                                        delay: 0.35,
                                    });
                                }}
                                src={user.image}
                            />
                        </div>
                        <div className="profileOptions">
                            <img src={status} />
                            <img src={newmessage} />
                            <img src={settings} />
                        </div>
                    </div>
                    <div className="notificationBox">
                        <div class="bellBox">
                            <img src={bell} />
                        </div>
                        <div class="textBox">
                            <p>Receba notificações de novas mensagens</p>
                            <p>Ativar notificações na área de trabalho </p>
                        </div>
                    </div>
                    <div className="searchBox">
                        <div>
                            <img src={search} />
                            <input
                                type="search"
                                autoComplete="off"
                                name="searchInput"
                                // placeholder="Pesquisar ou começar uma nova conversa"
                            />
                            <label htmlFor="searchInput">
                                Pesquisar ou começar uma nova conversa
                            </label>
                        </div>
                    </div>
                    <div className="messagesBox">
                        {contatos.map((c) => {
                            return createContatos(c);
                        })}
                    </div>
                </div>
                <div className="rightSide">
                    <div className="ciSlider">
                        <div className="topbar">
                            <div className="tb">
                                <div>
                                    <img
                                        src={prev}
                                        onClick={() => {
                                            gsap.to(".ciSlider", {
                                                right: "-100%",
                                                ease: Expo.easeOut,
                                                duration: 0.2,
                                            });
                                            gsap.to(".contatoInterface", {
                                                width: "100%",
                                                ease: Expo.easeOut,
                                                duration: 0.2,
                                            });
                                        }}
                                    />
                                </div>
                                <h1>Dados do contato</h1>
                            </div>
                        </div>
                        <div className="ciPhoto">
                            <div className="cip">
                                <div>
                                    <img src={contatoInterface.image} />
                                </div>
                            </div>
                            <h2>{contatoInterface.name}</h2>
                        </div>
                        <div className="ciMidia">
                            <div className="f">
                                <span>Mídia, links e docs</span>
                                <img src={next} />
                            </div>
                            <div className="s">
                                <div className="imgPreviwer">
                                    <img src="https://cdn.ome.lt/f6EmM-3J4VojnDBnQmu6h6IbC1A=/1200x630/smart/extras/conteudos/thanos_82HS4D5.jpeg" />
                                </div>
                                <div className="imgPreviwer">
                                    <img src="https://cdn.ome.lt/f6EmM-3J4VojnDBnQmu6h6IbC1A=/1200x630/smart/extras/conteudos/thanos_82HS4D5.jpeg" />
                                </div>
                                <div className="imgPreviwer">
                                    <img src="https://cdn.ome.lt/f6EmM-3J4VojnDBnQmu6h6IbC1A=/1200x630/smart/extras/conteudos/thanos_82HS4D5.jpeg" />
                                </div>
                            </div>
                        </div>
                        <div className="ciOption">
                            <div className="i">
                                <div className="span">
                                    <span>Silenciar notificações</span>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="silence"
                                        id="silence"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="ciOption">
                            <div className="i">
                                <div className="span">
                                    <span>Mensagens favoritas</span>
                                </div>
                                <div>
                                    <img src={next} />
                                </div>
                            </div>
                        </div>
                        <div className="ciOption third">
                            <div className="aroundThird">
                                <div className="f">
                                    <div className="span">
                                        <span>Mensagens temporárias</span>
                                    </div>
                                    <div>Desativadas</div>
                                </div>
                                <img src={next} />
                            </div>
                        </div>

                        <div className="infos">
                            <div className="f">
                                <div className="span">
                                    <span>Recado e número de telefone</span>
                                </div>
                            </div>

                            <div className="s">
                                <div className="span">
                                    <span>{contatoInterface.bio}</span>
                                </div>
                                <div className="line"></div>
                            </div>

                            <div className="t">
                                <div className="span">
                                    <span>{contatoInterface.number}</span>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="f">
                                <img src={block} />
                            </div>
                            <div className="span">
                                <span>Bloquear</span>
                            </div>
                        </div>
                        <div className="red">
                            <div className="f">
                                <img src={dislike} />
                            </div>
                            <div className="span">
                                <span>Denunciar contato</span>
                            </div>
                        </div>
                        <div className="red">
                            <div className="f">
                                <img src={erase} />
                            </div>
                            <div className="span">
                                <span>Apagar conversa</span>
                            </div>
                        </div>
                    </div>

                    <div className="contatoInterface">
                        <div className="topBar">
                            <div
                                className="i"
                                onClick={() => {
                                    const e =
                                        document.querySelector(".kbBar .s");
                                    gsap.to(e, {
                                        width: "85%",
                                    });
                                    gsap.to(".contatoInterface", {
                                        width: 550,
                                        ease: Power2.easeOut,
                                        duration: 0.2,
                                    });
                                    gsap.to(".ciSlider", {
                                        right: 0,
                                        ease: Power2.easeOut,
                                        duration: 0.2,
                                    });
                                }}
                            >
                                <img src={contatoInterface.image} />
                            </div>
                            <span> {contatoInterface.name} </span>
                            <div className="s">
                                <img src={search} />
                            </div>
                        </div>
                        <div
                            className="messages"
                            style={{
                                backgroundImage: `url(${user.backgroudImage})`,
                            }}
                        >
                            {makeMessage(contatoInterface.allMessages)}
                        </div>
                        <div className="kbBar">
                            <div className="f">
                                <div>
                                    <span>
                                        <img src={emoji} />
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <img src={clip} />
                                    </span>
                                </div>
                            </div>

                            <div className="s">
                                <input
                                    type="text"
                                    autoComplete="off"
                                    name="searchInput"
                                    onKeyUp={(e) => {
                                        var msg = e.target.value;

                                        const elem =
                                            document.querySelector(".s label");

                                        // if (msg != "") {
                                        //     gsap.to(elem, {
                                        //         opacity: 0,
                                        //         duration: 0.1,
                                        //     });
                                        // } else {
                                        //     gsap.to(elem, {
                                        //         opacity: 1,
                                        //         duration: 0.1,
                                        //     });
                                        // }
                                        if (e.keyCode == 13) {
                                            setContatos((prev) => {
                                                const index =
                                                    prev.indexOf(
                                                        contatoInterface
                                                    );
                                                console.log(
                                                    contatos[index].allMessages
                                                );
                                                prev[index].allMessages.push([
                                                    "you",
                                                    msg,
                                                ]);

                                                return prev;
                                            });

                                            e.target.value = "";
                                        }
                                    }}
                                />
                                <label htmlFor="searchInput">
                                    Digite uma mensagem
                                </label>
                            </div>

                            <div className="micBox">
                                <img src={mic} />
                            </div>
                        </div>
                    </div>

                    <div className="intro">
                        <img src={introImg} />

                        <h1>Mantenha seu celular conectado</h1>
                        <p>
                            O WhatsApp conecta seu celular para sincronizar suas
                            mensagens. Para reduzir o uso de dados, conecte seu
                            celular a uma rede Wi-fi.
                        </p>

                        <div>
                            <p>
                                Faça chamadas a partir de um computador com o
                                WhatsApp para Windows.{" "}
                                <a href=""> Baixe aqui</a>.
                            </p>
                        </div>

                        <div className="faixa"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
