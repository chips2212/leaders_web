import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Fetch a single content item by type and slug
 * @param {string} type - Content type (services, sectors, insights, case-studies, team)
 * @param {string} slug - Content slug (e.g., 'crisis-management', 'finance-fintech')
 * @returns {Object} - { slug, frontmatter, contentHtml }
 */
export async function fetchContent(type, slug) {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      frontmatter,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching content: ${type}/${slug}`, error);
    return null;
  }
}

/**
 * Fetch all content items of a specific type
 * @param {string} type - Content type (services, sectors, insights, case-studies, team)
 * @returns {Array} - Array of content objects with slug and frontmatter
 */
export function fetchAllContent(type) {
  try {
    const typeDirectory = path.join(contentDirectory, type);
    
    // Check if directory exists
    if (!fs.existsSync(typeDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(typeDirectory);
    
    const allContent = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(typeDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data: frontmatter } = matter(fileContents);
        
        return {
          slug,
          frontmatter,
        };
      })
      .sort((a, b) => {
        // Sort by order field if it exists, otherwise by title
        if (a.frontmatter.order && b.frontmatter.order) {
          return a.frontmatter.order - b.frontmatter.order;
        }
        return (a.frontmatter.title || '').localeCompare(b.frontmatter.title || '');
      });
    
    return allContent;
  } catch (error) {
    console.error(`Error fetching all content: ${type}`, error);
    return [];
  }
}

/**
 * Get all content slugs of a specific type (for getStaticPaths)
 * @param {string} type - Content type
 * @returns {Array} - Array of slug objects for getStaticPaths
 */
export function getAllContentSlugs(type) {
  try {
    const typeDirectory = path.join(contentDirectory, type);
    
    if (!fs.existsSync(typeDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(typeDirectory);
    
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => ({
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }));
  } catch (error) {
    console.error(`Error getting slugs: ${type}`, error);
    return [];
  }
}

/**
 * Fetch site settings from site-settings.json
 * @returns {Object} - Site settings
 */
export function fetchSiteSettings() {
  try {
    const settingsPath = path.join(contentDirectory, 'site-settings.json');
    const fileContents = fs.readFileSync(settingsPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return {};
  }
}

/**
 * Fetch navigation from navigation.json
 * @returns {Object} - Navigation configuration
 */
export function fetchNavigation() {
  try {
    const navPath = path.join(contentDirectory, 'navigation.json');
    const fileContents = fs.readFileSync(navPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return { navigation: [] };
  }
}
