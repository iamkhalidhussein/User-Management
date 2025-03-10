import { UserManagement } from "./features/user-management";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="container mx-auto max-w-4xl py-4">
      <Toaster/>
      <UserManagement/>
    </div>
  )
}