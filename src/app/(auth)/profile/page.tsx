"use client"
import { Button, Card, CloseButton, Form, TextField, FieldError, Input, Label } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client"
import { useState } from "react";


const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const { data: session} = authClient.useSession();

const user = session?.user;
console.log(user)
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries());
    await authClient.updateUser({
      ...newUserData
    })
  }
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div className="w-[50%] mx-auto mt-10">
      <Card className="md:flex-row">
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
          <Image
           src={user?.image || "/default-avatar.png"}
            alt="image"
            height={200}
            width={300}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pe-8">{user?.name}</Card.Title>
            <Card.Description>
              {user?.email}
            </Card.Description>
            <CloseButton aria-label="Close banner" className="absolute end-3 top-3" />
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button className="w-full sm:w-auto" onClick={handleShow}>Update Profile</Button>
          </Card.Footer>
        </div>
      </Card>
      <div className="mt-5 object-cover overflow-hidden " >

        {show && <Form className="flex w-[90%] flex-col gap-4" onSubmit={handleUpdateProfile}>
          <TextField
            isRequired
            name="name"
            type="name"

          >
            <Label>Name</Label>
            <Input placeholder="Enter Your name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="image"

          >
            <Label>Profile Image URL</Label>
            <Input type="url"
              placeholder='photo' />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              Submit
            </Button>
          </div>
        </Form>}
      </div>
    </div>
  );
};

export default ProfilePage;