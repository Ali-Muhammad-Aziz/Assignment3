import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
 interface FormWrapperProps{
    children: React.ReactNode;
    title: string;
    description?: string;
 }

export const FormWrapper = ({children ,title,description}: FormWrapperProps) => {
  return (
    <Card className="w-[600px]">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
  
</Card>

  )
}
