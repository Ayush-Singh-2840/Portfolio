import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BarChart3, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Analysis Dashboard using Excel & Power BI',
      description: 'Comprehensive analysis of sales performance with interactive dashboards showing key metrics, trends, and insights. Built dynamic reports for stakeholder decision-making.',
      tags: ['Excel', 'Power BI', 'Sales Analysis', 'Dashboard', 'KPIs'],
      icon: BarChart3,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      features: [
        'Interactive sales performance dashboard',
        'Monthly and quarterly trend analysis',
        'Regional performance comparison',
        'Revenue forecasting models'
      ]
    },
    {
      title: 'Customer Segmentation using K-Means Clustering',
      description: 'Applied machine learning techniques to segment customers based on purchasing behavior and demographics. Created actionable insights for targeted marketing strategies.',
      tags: ['Python', 'Machine Learning', 'Clustering', 'Customer Analysis', 'Pandas'],
      icon: Users,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      features: [
        'K-means clustering algorithm implementation',
        'Customer behavior pattern analysis',
        'Segmentation visualization',
        'Marketing strategy recommendations'
      ]
    },
    {
      title: 'Retail Store Profitability Analysis',
      description: 'End-to-end analysis of retail operations to identify profit drivers and optimization opportunities. Utilized SQL for data extraction and Python for advanced analytics.',
      tags: ['SQL', 'Python', 'Business Analysis', 'Profitability', 'Visualization'],
      icon: TrendingUp,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      features: [
        'Product profitability analysis',
        'Store performance metrics',
        'Cost-benefit analysis',
        'Operational efficiency insights'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of analytical projects demonstrating skills in data processing, 
            visualization, and business intelligence. These represent the types of projects 
            I'm excited to work on professionally.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-hover bg-gradient-to-br ${project.gradient} ${project.borderColor} border-l-4`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-sm">
                      <project.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent hover:bg-accent/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-white"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code (Coming Soon)
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-white"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/5 to-success/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready for Real-World Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                These project concepts showcase my analytical thinking and technical skills. 
                I'm excited to apply these capabilities to solve real business challenges 
                and create meaningful impact through data.
              </p>
              <Button
                className="button-gradient text-white"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;