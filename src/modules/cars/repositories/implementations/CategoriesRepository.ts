import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // Comentário do padrão singleton

  // private static INSTANCE: CategoriesRepository;

  // privando o construtor só posso dar new de dentro da classe
  // private constructor() {
  //   this.repository = getRepository(Category);
  // }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
