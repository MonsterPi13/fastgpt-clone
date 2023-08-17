import { Button, ModalBody, ModalFooter } from "@chakra-ui/react";
import MyModal from "./MyModal";

interface Props {
  onClose: () => void;
}

const CommunityModal: React.FC<Props> = ({ onClose }) => {
  return (
    <MyModal isOpen={true} onClose={onClose} title={"Community"}>
      <ModalBody textAlign={"center"}>test</ModalBody>

      <ModalFooter>
        <Button variant={"outline"} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </MyModal>
  );
};

export default CommunityModal;
