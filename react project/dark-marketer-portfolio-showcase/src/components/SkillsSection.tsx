
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const skills = [
  { name: "Meta Advertising Campaigns", percent: 90 },
  { name: "E-Commerce Marketing Strategy", percent: 85 },
  { name: "Digital Marketing Certification", percent: 95 },
  { name: "Social Media Management", percent: 80 },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto my-16 px-6 sm:px-12 animate-fade-in-up"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Skills & Expertise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between font-semibold text-gray-200 mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <Progress value={skill.percent} />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default SkillsSection;
