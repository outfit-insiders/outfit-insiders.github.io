import { useState, useEffect, MouseEventHandler } from "react";
import {
  Avatar,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Box,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
  Textarea,
  Badge,
  useToast,
} from "@chakra-ui/react";

export default function Profile() {
  // Variables ----------------------------------------------------------------------

  // set up state variables for the name modal and user name input fields
  const [showNameModal, setShowNameModal] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    username: "",
    biography: "",
    avatarurl: "",
    userid: "",
  });
  const [friendRequests, setFriendRequests] = useState<
    null | { username: string; avatarurl: string; userid: string }[]
  >(null);
  const [friendIds, setFriendIds] = useState<string[]>([]);

  const toast = useToast();
  const [friend, setFriend] = useState({ name: "", username: "" });

  // Functions ----------------------------------------------------------------------

  const handleEditProfile = () => {
    setShowNameModal(true);
  };

  return (
    <Stack direction={["column", null, "row"]} mt={2}>
      <Box ml={["auto", 12]} mt={6} mr={["auto", 12]}>
        <Avatar boxSize={300} name={person.name} src={person.avatarurl} />
        <Heading as="h1" size="xl" mt={4}>
          {person.username}
        </Heading>
        <Text fontSize="lg" color="gray.500">
          {person.name}
        </Text>
        <Button mt={4} onClick={handleEditProfile} w={"full"}>
          Edit Profile
        </Button>
        {/* modal for name and username */}
        {showNameModal && (
          <Modal isOpen={showNameModal} onClose={() => setShowNameModal(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Profile Information</ModalHeader>
              <ModalBody>
                <FormControl>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    placeholder="Uppercase and lowercase letters only"
                    value={person.name}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^a-zA-Z ]/g,
                        ""
                      );
                    }}
                    onChange={(e) =>
                      setPerson((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Avatar</FormLabel>
                  <Input
                    placeholder="put a url here"
                    value={person.avatarurl}
                    onChange={(e) =>
                      setPerson((prev) => ({
                        ...prev,
                        avatarurl: e.target.value,
                      }))
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  {/* onClick={handleNameSubmit} */}
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>

      <Box pt={12} pl={4} pr={4} w={"full"}>
        <Heading as="h1" size="xl" mb={4}>
          Settings
        </Heading>
        <Badge colorScheme="blue" fontSize="md" mb={1}>
          biography
        </Badge>
        {person.biography !== "" && (
          <Button size="xs" float={"right"}>
            {/* onClick={handleNameSubmit} */}
            Save
          </Button>
        )}
        <Textarea
          fontSize="sm"
          color="gray.500"
          mb={4}
          value={person.biography}
          onChange={(e) =>
            setPerson((prev) => ({ ...prev, biography: e.target.value }))
          }
        />
      </Box>
    </Stack>
  );
}
