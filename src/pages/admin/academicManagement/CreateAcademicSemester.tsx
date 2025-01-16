import { Button, Col, Flex } from "antd";
import StnForm from "../../../components/form/StnForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSemester.schema";


const CreateAcademicSemester = () => {
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <StnForm 
        onSubmit={onSubmit}
        resolver= {zodResolver(academicSemesterSchema)}
        >

          <Button htmlType="submit">Submit</Button>
        </StnForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
