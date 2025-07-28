import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Recent Graduate',
      description: 'Completed comprehensive Data Analytics course with hands-on training in modern tools and techniques.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on applying analytical skills to solve real business problems and drive data-driven decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuously learning and staying updated with the latest trends in data analytics and business intelligence.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate Data Analytics enthusiast with a strong foundation in statistical analysis, 
            data visualization, and business intelligence tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Transforming Data into <span className="text-gradient">Insights</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I recently completed an intensive Data Analytics program where I gained comprehensive 
              knowledge in data cleaning, exploratory data analysis, statistical modeling, and 
              data visualization. While I'm early in my career, I'm passionate about leveraging 
              data to uncover patterns and drive business decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My analytical mindset, combined with proficiency in tools like Python, SQL, Excel, 
              and visualization platforms, enables me to approach complex data challenges systematically. 
              I'm eager to apply these skills in a professional environment and contribute to 
              data-driven success stories.
            </p>
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">Core Competencies:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Statistical Analysis',
                  'Data Visualization',
                  'Business Intelligence',
                  'Problem Solving',
                  'Critical Thinking',
                  'Communication'
                ].map((competency) => (
                  <div key={competency} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;