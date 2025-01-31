
export default function Todo({ text, isCompleted, IsDeleted }) {
    if (IsDeleted) {
        return null;
    } else{
            return (
               <li>{text} {isCompleted && '✅'}</li>
            )
        } 
        
}