import { Layout, Card, Page, TextStyle } from "@shopify/polaris";

const Index = () => {
  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Title Here"
          description="This is just the example Description here"
        >
          <Card>
            <TextStyle variation="strong">Pondir</TextStyle>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Index;
