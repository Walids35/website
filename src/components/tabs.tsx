import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkTab from "./work";
import EducationTab from "./education";

const Work = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="work">Work</TabsTrigger>
          <TabsTrigger className="w-full" value="eduation">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <WorkTab />
        </TabsContent>
        <TabsContent value="eduation">
          <EducationTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Work;
