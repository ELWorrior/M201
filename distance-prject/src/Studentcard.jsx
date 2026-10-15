import StudentCardItem from './Studentcarditem.jsx'

export default function Studentcard({ students, onDelete, onUpdate }) {
  return students.map(item => (
    <StudentCardItem
      key={item.id}
      student={item}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ))
}