import client from "@/db"

// async function getUserData() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));  // adds artificial delay to mimic a backend

//   //const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  
//   const response = await axios.get("http://localhost:3000/api/user")
//   return response.data;
// }

// better way to fetch data

async function getUserData() {
  const user = await client.user.findFirst();

  return {
    email: user?.email,
    name: user?.firstName
  }
}

// async component
export default async function Home(){
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="p-4 border border-black rounded-lg">
        <p>Hi there</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.name}</p>
      </div>
    </div>
  );
}
