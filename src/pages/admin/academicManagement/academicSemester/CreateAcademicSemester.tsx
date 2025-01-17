import { Button, Col, Flex } from "antd";

import { zodResolver } from "@hookform/resolvers/zod";



import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../../redux/features/admin/academicManagement.api";
import { semesterOptions, yearOptions } from "../../../../constants/semester";
import { TAcademicSemester, TResponse } from "../../../../types";
import StnForm from "../../../../components/form/StnForm";
import { academicSemesterSchema } from "../../../../schemas/academicSemester.schema";
import StnSelect from "../../../../components/form/StnSelect";
import { monthOptions } from "../../../../constants/global";


const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating..");

    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester is created", { id: toastId });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <StnForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <StnSelect label="Name" name="name" options={semesterOptions} />

          <StnSelect label="Year" name="year" options={yearOptions} />

          <StnSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />

          <StnSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </StnForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
