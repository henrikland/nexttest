import Prismic from 'prismic-javascript';

const Index = props => {
  return (
    <div>
      <p>Hellodd Next.js</p>
      {props.data.map((thing, index) => <div key={index}>{thing}</div>)}
    </div>
  );
};

Index.getInitialProps = async () => {
	const apiEndpoint = "https://lbb-test.prismic.io/api/v2";
	 
	const api = await Prismic.getApi(apiEndpoint);
	const data = await api.query(""); // An empty query will return all the documents
	console.log(data);
	
	return {
		data: Object.keys(data.results[0].data)
	};
};

export default Index;