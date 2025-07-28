import { Card, CardContent } from '@/components/ui/card';

const Tools = () => {
  const tools = [
    {
      name: 'Python',
      description: 'Data analysis, manipulation, and visualization',
      icon: '🐍',
      category: 'Programming',
    },
    {
      name: 'SQL',
      description: 'Database querying and data extraction',
      icon: '💾',
      category: 'Database',
    },
    {
      name: 'Excel',
      description: 'Spreadsheet analysis, pivot tables, and charts',
      icon: '📊',
      category: 'Analysis',
    },
    {
      name: 'Power BI',
      description: 'Business intelligence and interactive dashboards',
      icon: '📈',
      category: 'BI Tools',
    },
    {
      name: 'Tableau',
      description: 'Advanced data visualization and storytelling',
      icon: '📋',
      category: 'Visualization',
    },
    {
      name: 'Pandas',
      description: 'Data manipulation and analysis library',
      icon: '🐼',
      category: 'Python Library',
    },
    {
      name: 'NumPy',
      description: 'Numerical computing and array operations',
      icon: '🔢',
      category: 'Python Library',
    },
    {
      name: 'Matplotlib',
      description: 'Static and interactive data visualization',
      icon: '📊',
      category: 'Visualization',
    },
    {
      name: 'Seaborn',
      description: 'Statistical data visualization',
      icon: '🌊',
      category: 'Visualization',
    },
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <section id="tools" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern data analytics tools and technologies for comprehensive 
            data analysis workflow.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="card-hover group cursor-pointer border-l-4 border-l-accent/30 hover:border-l-accent"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {tool.name}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Summary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const categoryTools = tools.filter(tool => tool.category === category);
            return (
              <Card key={index} className="bg-gradient-to-br from-accent/5 to-success/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {categoryTools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-2xl"
                        title={tool.name}
                      >
                        {tool.icon}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {categoryTools.length} tool{categoryTools.length > 1 ? 's' : ''}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground text-sm">
                I'm constantly expanding my toolkit and staying up-to-date with the latest 
                tools and best practices in data analytics. Always excited to learn new 
                technologies that can enhance data analysis capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tools;