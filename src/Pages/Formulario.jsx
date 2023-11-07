import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Descrição" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFornecedor">
          <Form.Label>Fornecedor</Form.Label>
          <Form.Control type="text" placeholder="Fornecedor" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatafabricacao">
          <Form.Label>Data fabricação</Form.Label>
          <Form.Control type="text" placeholder="Data fabricação" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantidadeestoque">
          <Form.Label>Quantidade estoque</Form.Label>
          <Form.Control type="text" placeholder="Quantidade estoque" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Formulario;
