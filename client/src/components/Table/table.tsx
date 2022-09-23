import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const ContactTable = () => {
  return (
    <TableContainer marginTop={"2rem"}>
      <Table variant="striped" colorScheme={"blackAlpha"} color={"black"}>
        <Thead>
          <Tr>
            <Th color={"black"}>Nome Completo</Th>
            <Th color={"black"}>Email</Th>
            <Th color={"black"}>Telefone</Th>
            <Th color={"black"}>Celular</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
