import { auth } from "@clerk/nextjs";
import DropzoneComponent from "@/components/DropzoneComponent";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/table/TableWrapper";
async function Dashboard() {
  const { userId } = auth();
  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    fullName: doc.data().fullName,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadedURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  return (
    <div className="border-t">
      <DropzoneComponent />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
