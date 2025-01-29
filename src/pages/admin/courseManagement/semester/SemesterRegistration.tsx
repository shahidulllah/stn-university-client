import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button, Col, Flex } from 'antd';
import { toast } from 'sonner';
import { TResponse } from '../../../../types';
import StnForm from '../../../../components/form/StnForm';
import StnSelect from '../../../../components/form/StnSelect';
import StnDatePicker from '../../../../components/form/StnDatePicker';
import StnInput from '../../../../components/form/StnInput';


const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: 'sort', value: 'year' },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <StnForm onSubmit={onSubmit}>
          <StnSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <StnSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <StnDatePicker name="startDate" label="Start Date" />
          <StnDatePicker name="endDate" label="End Date" />
          <StnInput type="text" name="minCredit" label="Min Credit" />
          <StnInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </StnForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;