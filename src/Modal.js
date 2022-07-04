import {
    VStack,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";

const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-250 text-white py-2 px-4 rounded shadow
`

export default function SelectWalletModal({ isOpen, closeModal }) {
    const { activate } = useWeb3React();

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };

    return (
        <div>
            <button className={ButtonStyle} onClick={() => {
                activate(connectors.walletConnect);
                setProvider("walletConnect");
                closeModal();
            }}>
                WalletConnect
            </button>
            <button className={ButtonStyle} onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
            }}>
                Metamask
            </button>
        </div>
    );
}
