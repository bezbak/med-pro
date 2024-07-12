const Features = ({ features }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
  
  export default Features;
  