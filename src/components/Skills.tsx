import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Database, BarChart3, Brain, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data Management',
      color: 'text-blue-500',
      skills: [
        { name: 'Data Cleaning and Preprocessing', level: 85 },
        { name: 'SQL (Basic to Intermediate)', level: 80 },
        { name: 'Excel (Pivot Tables, VLOOKUP)', level: 90 },
        { name: 'Python for Data Analysis', level: 75 },
      ],
    },
    {
      icon: BarChart3,
      title: 'Analysis & Visualization',
      color: 'text-green-500',
      skills: [
        { name: 'Exploratory Data Analysis (EDA)', level: 85 },
        { name: 'Data Visualization (Matplotlib, Seaborn)', level: 80 },
        { name: 'Power BI', level: 75 },
        { name: 'Tableau', level: 70 },
      ],
    },
    {
      icon: Brain,
      title: 'Advanced Analytics',
      color: 'text-purple-500',
      skills: [
        { name: 'Statistical Analysis', level: 75 },
        { name: 'Machine Learning Basics', level: 65 },
        { name: 'Pandas & NumPy', level: 80 },
        { name: 'Business Intelligence Concepts', level: 85 },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Business Skills',
      color: 'text-orange-500',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Critical Thinking', level: 85 },
        { name: 'Data Storytelling', level: 80 },
        { name: 'Business Acumen', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set covering the entire data analytics pipeline from data collection 
            to insights delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <span className="text-xl font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-accent/5 to-success/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Apply These Skills
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While I'm early in my career, I have a solid foundation in data analytics 
                fundamentals and am eager to apply these skills to real-world challenges. 
                I'm committed to continuous learning and professional growth.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Data-Driven Decision Making',
                  'Statistical Modeling',
                  'Dashboard Creation',
                  'Report Generation',
                  'Data Quality Assessment',
                  'Performance Metrics'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;