
import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/InitUser";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";

export default async function Page() {

  const supabase = await supabaseServer();

  const { data, error } = await supabase.auth.getSession()

  return (

    <>
<div className="max-w-3xl mx-auto md:py-10 h-screen">
				<div className=" h-full border rounded-md flex flex-col p-5 h-fulloverflow-y-auto">
					
            <ChatHeader user={data.session?.user}/>

            <ChatMessages/>

            <ChatInput/>

        </div>
    </div>

    <InitUser user = {data.session?.user}/>
    </>

    

         

  );
}
